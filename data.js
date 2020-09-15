
import Bodybuilding1 from "./images/Bodybuilding1.jpeg";
import Bodybuilding2 from "./images/Bodybuilding2.jpeg";
import Bodybuilding3 from "./images/Bodybuilding3.jpeg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      featured: false,
      description:

      extras: [

      ],
      images: [
        {
          fields: {
            file: {
              url: Bodybuilding1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {

      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      featured: false,
      description:

      extras: [

      ],
      images: [
        {
          fields: {
            file: {
              url: Bodybuilding2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      price: 600,
      size: 1000,
      capacity: 10,
      featured: true,
      description:
      extras: [

      ],
      images: [
        {
          fields: {
            file: {
              url: Bodybuilding3
            }
          }
        }
      ]
    }
  }
];
