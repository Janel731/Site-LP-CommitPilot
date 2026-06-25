import React from 'react'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  Menu,
} from "lucide-react";



const navigationItems = [
  { title: "ACCEUIL", lien: "/" },
  { title: "Comment çà marche?", lien: "#howToWorks" },
  { title: "DOCUMENTATION", lien: "/documentation" },
  
];

const Navbar = () => {
  return (
    <>
      <header>

        <div className="flex h-16 items-center justify-between p-7 fixed top-0 left-0 w-full bg-white z-20">


          <a href="#" className="flex items-center gap-2">

            <div className="flex items-center space-x-2">

             

              <span className="font-mono text-xl font-bold">
                CommitPilot
              </span>

            </div>

          </a>



          <nav className="hidden md:flex items-center space-x-8">

            {navigationItems.map((item)=>(
              
              <a
                key={item.title}
                to={item.lien}
                href={item.lien}
                className="text-sm font-mono text-foreground hover:text-[#1B4FD8] transition-colors"
              >
                {item.title}
              </a>

            ))}

          </nav>



          <div className="flex items-center space-x-4">


            <Button
              variant="default"
              className="rounded-none hidden md:inline-flex bg-[#1B4FD8] hover:bg-[#1B4FD8]/90 font-mono"
            >
              <a href="/documentation">
                    Demarrer
              </a>

              

              <ArrowRight className="ml-1 w-4 h-4"/>

            </Button>



            <Sheet>

              <SheetTrigger asChild>

                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >

                  <Menu className="h-5 w-5"/>

                  <span className="sr-only">
                    Toggle menu
                  </span>

                </Button>

              </SheetTrigger>



              <SheetContent>

                <nav className="flex flex-col gap-6 mt-6 p-6">


                  {navigationItems.map((item)=>(

                    <a
                      key={item.title}
                      href={item.lien}
                      className="text-sm font-mono text-foreground hover:text-[#1B4FD8] transition-colors"
                    >
                      {item.title}
                    </a>

                  ))}


                  <Button className="cursor-pointer rounded-none bg-[#1B4FD8] hover:bg-[#1B4FD8]/90 font-mono">

                    GET STARTED

                    <ArrowRight className="ml-1 w-4 h-4"/>

                  </Button>


                </nav>


              </SheetContent>


            </Sheet>


          </div>


        </div>

      </header>
    </>
  )
}

export default Navbar