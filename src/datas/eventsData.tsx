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
      photo: "https://picsum.photos/800/600",
    },
    {
      id: 2,
      guestName: "Zahra SHI İsmayılzadə",
      guestWorkingPosition: "Designer at SHI",
      connect: "",
      photo: "https://picsum.photos/800/600",
    },
    {
      id: 1,
      guestName: "Məhəmməd Xasıyev",
      guestWorkingPosition: "Designer at SAFAROFF",
      connect: "",
      photo: "https://picsum.photos/800/600",
    },
  ],
  eventDate: "Apr 17, 2024",
  slotsCount: "100 slots available",
  eventRegisterDate: "Apr 16, 2024",
  price: 0,
  linkForLearnMore: "",
  isEnd: (index + 1) % 2 === 0,
  photos: [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
  ],
}));