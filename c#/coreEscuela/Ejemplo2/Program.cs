using System;
using CoreEscuelas.Entidades;

namespace ejemplo1
{
    class Program
    {
        static void Main(string[] args){
            var escuela = new Escuela("Jose Maria Vargas",2002);
            escuela.Pais = "Colombia";
            escuela.ciudad = "Bogota";
            Console.WriteLine(escuela.Name);
        }
    }
}
