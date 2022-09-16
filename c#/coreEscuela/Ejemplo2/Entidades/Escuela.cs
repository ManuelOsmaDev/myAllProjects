namespace CoreEscuelas.Entidades
{
    class Escuela
    {
        string name;

        public string Name
        {
            get { return name; }
            set { name = value.ToUpper(); }
        }
        public int añoDeCreacion { get; set; }

        public string Pais { get; set; }

        public string ciudad { get; set; }

        public Escuela(string nameEntrada,int añoDeCreacion) => (nameEntrada, añoDeCreacion) = (name, añoDeCreacion);
    }
}