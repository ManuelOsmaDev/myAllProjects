using System;
using System.IO.Compression;

namespace zip
{
    class Program
    {
        static void Main(string[] args)
        {
            string source = null;
            string target = null;

            if (args == null || args.Length != 2)
            {
                System.Console.WriteLine("uso <fuente> <destino>.zip");
                return;
            }

            source = args[0];
            source = args[1];

            try
            {
                ZipFile.CreateFromDirectory(source, target);
                configureLog();
            }
            catch(Exception ex)
            {
                NLog.LogManager.GetCurrentClassLogger().Error(ex.Message);
            }
        }
        private static void configureLog()
        {
            var config = new NLog.Config.LoggingConfiguration();
            var logFile = new NLog.Targets.FileTarget("logFile") { FileName = "log.txt" };
            config.AddRule(NLog.LogLevel.Debug, NLog.LogLevel.Fatal, logFile);
            NLog.LogManager.Configuration = config;
        }
    }
}
