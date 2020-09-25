import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import img6 from "./images/shtanga-3.jpg";
import img7 from "./images/shtanga-2.jpg";
import img8 from "./images/shtanga.jpeg";
import img9 from "./images/personal-training.jpg";
import img10 from "./images/competition.jpg";
import img11 from "./images/pharmacy.jpg";
import img12 from "./images/menu.jpeg";

export default [
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Online consultation 3 questions",
      slug: "Online consultation 3 questions",
      type: "consultation",
      price: 100,
      featured: false,
      description:
        "Online consultation and answers to your questions with using messenger 3 questions",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Online consultation 30 min",
      slug: "Online consultation 30 min",
      type: "consultation",
      price: 200,
      featured: false,
      description:
        "Online consultation and answers to your questions with using messenger 30 minutes",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "online-consultation 1 hour",
      slug: "online-consultation 1 hour",
      type: "consultation",
      price: 300,
      featured: true,
      description:
        "Online consultation and answers to your questions with using messenger 1 hour",
      extras: [
        "Fast"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "personal body training",
      slug: "personal body training",
      type: "personal",
      price: 300,
      featured: false,
      description:
        "Description",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Bodybuilding competition prepare",
      slug: "Bodybuilding competition prepare",
      type: "competition",
      price: 2000,
      featured: false,
      description:
        "Description",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "supplement plan",
      slug: "supplement plan",
      type: "supplement",
      price: 1100,
      featured: false,
      description:
        "Description",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "nutrition-plan",
      slug: "nutrition-plan",
      type: "nutrition",
      price: 150,
      featured: true,
      description:
        "Creating a personal training plan for weight loss, gaining muscle mass, or preparing for a bodybuilding competition",
      extras: [
        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "training plan",
      slug: "training plan",
      type: "training",
      price: 600,
      featured: true,
      description:
        "Description",
      extras: [

        "Comfortable"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            } 
          } 
        } 
      ] 
    } 
  }
];
