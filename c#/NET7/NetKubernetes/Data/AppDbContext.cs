using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace NetKubernetes.Models
{
   public class AppDbContext : IdentityDbContext<Usuario>
   {
      public AppDbContext(Parameters)
      {
         
      }
   }
}