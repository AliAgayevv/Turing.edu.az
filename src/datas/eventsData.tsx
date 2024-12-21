export const eventsData = new Array(30).fill(null).map((_, index) => ({
  id: index + 1,
  eventCategory: "UX/UI Dizayn",
  eventName: `Event ${index + 1}`,
  eventDesc: "A lot happened this month. Take a look at what's coming.",
  guests: [
    {
      id: 1,
      guestName: "Lətif Kərim",
      guestWorkingPosition: "Designer at SAFAROFF",
      connect: "",
      photo: "/src/assets/photos/letif.jpeg",
    },
    {
      id: 2,
      guestName: "Zahra SHI İsmayılzadə",
      guestWorkingPosition: "Designer at SHI",
      connect: "",
      photo: "/src/assets/photos/zahra.jpeg",
    },
    {
      id: 1,
      guestName: "Məhəmməd Xasıyev",
      guestWorkingPosition: "Designer at SAFAROFF",
      connect: "",
      photo: "/src/assets/photos/mehemmed.jpeg",
    },
  ],
  eventDate: "Apr 17, 2024",
  slotsCount: "100 slots available",
  eventRegisterDate: "Apr 16, 2024",
  price: 0,
  linkForLearnMore: `/events/${index + 1}`,
  category: (index + 1) % 2 === 0 ? "hackathons" : "competitions",
  isEnd: (index + 1) % 2 === 0,
  photos: [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
  ],
}));
