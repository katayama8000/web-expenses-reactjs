import { Button } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const salesGoals = 10000000;
let team1 = 2800000;
let team2 = 38000;

export const data = {
  labels: ["team1", "team2", "left"],
  datasets: [
    {
      label: "# of Votes",
      data: [team1, team2, salesGoals - (team1 + team2)],
      backgroundColor: [
        "rgb(255, 0, 0)",
        "rgba(255, 165, 0)",
        "rgba(201, 203, 207)",
      ],
      // borderColor: [
      //   "rgba(255, 99, 132, 1)",
      //   "rgba(54, 162, 235, 1)",
      //   "rgba(255, 206, 86, 1)",
      //   "rgba(75, 192, 192, 1)",
      //   "rgba(153, 102, 255, 1)",
      //   "rgba(255, 159, 64, 1)",
      // ],
      // borderWidth: 1,
    },
  ],
};

const Profile = () => {
  return <Doughnut data={data} />;
};

export default Profile;
