import Image from "next/image";
import React from "react";
import pgtemp from "../../../assets/ProgramsPage/Program-temp/pgtemp.avif";
import card2 from "../../../assets/Home/Programs/Card2.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const Program = () => {
  return (
    <div className="flex justify-evenly py-12  flex-col md:flex-row">
      <Card className="w-[90vw] sm:w-[70vw] md:w-[30vw] mb-8 mx-auto">
        <CardHeader color="blue" className="relative h-56">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1659410186752-ba1d0a244c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80"
            alt="img-blur-shadow"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Live
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <button>Learn More</button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-[90vw] sm:w-[70vw] md:w-[30vw] mb-8 mx-auto">
        <CardHeader color="blue" className="relative h-56">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1659410186752-ba1d0a244c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80"
            alt="img-blur-shadow"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Masterclass
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <button>Learn More</button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-[90vw] sm:w-[70vw] md:w-[30vw] mb-8 mx-auto">
        <CardHeader color="blue" className="relative h-56">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1659410186752-ba1d0a244c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1943&q=80"
            alt="img-blur-shadow"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Student Reviews
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <button>Learn More</button>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Program;
