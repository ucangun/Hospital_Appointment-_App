import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const Data = [
  {
    id: 1,
    image: `${image1}`,
    text: "John Smith",
    day: "Dec 12th at 2:30pm",
    completed: false,
    doctor: "DR Alice Walker",
    description:
      "Dr. Alice Walker specializes in internal medicine with a focus on digestive disorders.",
  },
  {
    id: 2,
    image: `${image2}`,
    text: "Emily Johnson",
    day: "Dec 13th at 1:30pm",
    completed: true,
    doctor: "DR Mary Brown",
    description:
      "Dr. Mary Brown is a renowned cardiologist known for her expertise in heart diseases.",
  },
  {
    id: 3,
    image: `${image3}`,
    text: "Michael Williams",
    day: "Dec 14th at 3:00pm",
    completed: false,
    doctor: "DR Laura White",
    description:
      "Dr. Laura White is an experienced pediatrician dedicated to children's health.",
  },
  {
    id: 4,
    image: `${image4}`,
    text: "Sarah Davis",
    day: "Dec 12th at 2:30pm",
    completed: false,
    doctor: "DR James Black",
    description:
      "Dr. James Black specializes in orthopedic surgery and sports medicine.",
  },
  {
    id: 5,
    image: `${image5}`,
    text: "David Miller",
    day: "Dec 13th at 1:30pm",
    completed: true,
    doctor: "DR James Black",
    description:
      "Dr. James Black is a neurologist known for his research in neurological disorders.",
  },
  {
    id: 6,
    image: `${image6}`,
    text: "Olivia Wilson",
    day: "Dec 14th at 3:00pm",
    completed: false,
    doctor: "DR Laura White",
    description:
      "Dr. Laura White specializes in dermatology and skincare treatments.",
  },
];

export default Data;
