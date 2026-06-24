import React from 'react'
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowRight,
  Menu,
} from "lucide-react";
import { Link } from 'react-router-dom';


const navigationItems = [
  { title: "ACCEUIL", lien: "/" },
  { title: "Comment çà marche?", lien: "#" },
  { title: "DOCUMENTATION", lien: "/documentation" },
  { title: "ABOUT US", lien: "#" },
];

const Navbar = () => {
  return (
    <>
      <header>

        <div className="flex h-16 items-center justify-between">


          <a href="#" className="flex items-center gap-2">

            <div className="flex items-center space-x-2">

             

              <span className="font-mono text-xl font-bold">
                CommitPilot
              </span>

            </div>

          </a>



          <nav className="hidden md:flex items-center space-x-8">

            {navigationItems.map((item)=>(
              
              <Link
                key={item.title}
                to={item.lien}
                className="text-sm font-mono text-foreground hover:text-[#FF6B2C] transition-colors"
              >
                {item.title}
              </Link>

            ))}

          </nav>



          <div className="flex items-center space-x-4">


            <Button
              variant="default"
              className="rounded-none hidden md:inline-flex bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 font-mono"
            >

              GET STARTED

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

                <nav className="flex flex-col gap-6 mt-6">


                  {navigationItems.map((item)=>(

                    <a
                      key={item.title}
                      href={item.href}
                      className="text-sm font-mono text-foreground hover:text-[#FF6B2C] transition-colors"
                    >
                      {item.title}
                    </a>

                  ))}


                  <Button className="cursor-pointer rounded-none bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 font-mono">

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