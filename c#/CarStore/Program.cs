using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using CarStore.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("cars") ?? "Data Source=cars.db";

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<Cardb>(options => options.UseInMemoryDatabase("items"));
builder.Services.AddSwaggerGen( c =>{
    c.SwaggerDoc("v1",new OpenApiInfo{
        Title = "Car store Api",
        Description = "El carro de tus sueños",
        Version = "v1"
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI( c=> {
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
});

app.MapGet("/cars", async (Cardb db) => await db.cars.ToListAsync());
app.MapPost("/cars/{id}", async (Cardb db, int id) => await db.cars.FindAsync());
app.MapPost("/cars", async (Cardb db, Car car) => {
    await db.cars.AddAsync(car);
    await db.SaveChangesAsync();
    return Results.Created($"/car/{car.id}", car);
});
app.MapPut("/cars/{id}", async (Cardb db, Car updateCar, int id) =>
{
      var carros = await db.cars.FindAsync(id);
      if (carros is null) return Results.NotFound();
      carros.marca = updateCar.marca;
      carros.model = updateCar.model;
      updateCar.name  = updateCar.name;
      await db.SaveChangesAsync();
      return Results.Ok();
});

app.MapDelete("/car/{id}", async (Cardb db, int id) =>
{
   var carros = await db.cars.FindAsync(id);
   if (carros is null)
   {
      return Results.NotFound();
   }
   db.cars.Remove(carros);
   await db.SaveChangesAsync();
   return Results.Ok();
});
app.Run();

class Cardb : DbContext{
    public Cardb(DbContextOptions options): base(options){}
    public DbSet<Car> cars {get;set;} = null!;
}

