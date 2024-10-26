interface Resource {
  name: string;
  required: string;
  available: string;
  percentage: number;
}

export const calculateResourceRequirements = (currentPower: number): Resource[] => {
  return [
    {
      name: "Energy Production",
      required: "1.74×10¹⁶ W",
      available: `${currentPower.toExponential(2)} W`,
      percentage: (currentPower / 1.74e16) * 100,
    },
    {
      name: "Raw Materials",
      required: "10⁹ tons",
      available: "2.5×10⁸ tons",
      percentage: 25,
    },
    {
      name: "Computing Power",
      required: "10²⁴ FLOPS",
      available: "10²⁰ FLOPS",
      percentage: 40,
    },
    {
      name: "Scientific Knowledge",
      required: "100%",
      available: "35%",
      percentage: 35,
    },
    {
      name: "Infrastructure",
      required: "Global Scale",
      available: "Regional Scale",
      percentage: 30,
    },
    {
      name: "Technological Readiness",
      required: "Type I",
      available: "Pre-Type I",
      percentage: 45,
    },
  ];
};