using System;

namespace CoreEscuela
{
    class Escuela
    {
        public string name;
        public string direccion;
        public string ceo;
        public int añoFundacion;
        public void Timbrar(){
            //TODO:
            //    Console.Beep(3290, 100); //Mi
            //    Console.Beep(3290, 100); //Mi
            //    Console.Beep(4400, 300); //La
            //    Console.Beep(3290, 100); //Mi
            //    Console.Beep(293, 100); //re
               Console.Beep(261, 100); //Do
               Console.Beep(293, 100); //re
               Console.Beep(440, 100); //La
               Console.Beep(493, 100); //La
               Console.Beep(261, 100); //Do
               Console.Beep(261, 100); //Do
               Console.Beep(293, 100); //re
               Console.Beep(261, 100); //Do
        }
    }

    class Program
    {
        static void Main(string[] args){
            var miEscuela = new Escuela();
            miEscuela.name = "Jose Maria Vargas Vila";
            miEscuela.direccion = "kr 27 g 72 d 282";
            miEscuela.añoFundacion = 2002;
            miEscuela.ceo = "Jose Maria";
            Console.WriteLine("Timbre cambio de clase");
            miEscuela.Timbrar();
        }
    }
}