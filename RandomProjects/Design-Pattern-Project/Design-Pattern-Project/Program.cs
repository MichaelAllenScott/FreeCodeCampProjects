using System;

namespace Design_Pattern_Project
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, welcome to Michael's design pattern app!");
            Console.WriteLine();

            while (true)
            {
                Console.WriteLine("Please enter the number of the design pattern you would like to observe in action:");
                Console.WriteLine("'1' = Abstract Factory Pattern");
                Console.WriteLine("'2' = Factory Pattern");
                Console.WriteLine("'3' = Composite Pattern");
                Console.WriteLine("'4' = State Pattern");

                Console.WriteLine();
                Console.Write("Number: ");

                var designPatternChoice = Console.ReadLine();

                switch (designPatternChoice)
                {
                    case "1":
                        AbstractFactoryPattern.PerformPattern();
                        break;
                    case "2":
                        FactoryPattern.PerformPattern();
                        break;
                    case "3":
                        CompositePattern.PerformPattern();
                        break;
                    case "4":
                        StatePattern.PerformPattern();
                        break;
                }
                Console.WriteLine();
            }
            
        }
    }
}
