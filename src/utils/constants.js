export const map = {
  status: 5,
  priority: 5,
  user: 5,
};

export const groups = [
  { value: "status", key: "Status" },
  { value: "priority", key: "Priority" },
  { value: "user", key: "User" },
];

export const ordering = [
  { key: "Priority", value: "priority" },
  { key: "Title", value: "title" },
];

export const statusTitleArr = [
  "Backlog",
  "Todo",
  "In progress",
  "Done",
  "Cancelled",
];

export const statusTitleLogo = [
  "https://img.icons8.com/material/24/737373/inactive-state--v1.png",
  "https://img.icons8.com/material/24/737373/0-degrees.png",
  "https://img.icons8.com/material/24/FAB005/realtime-protection.png",
  "https://img.icons8.com/tiny-color/16/checked.png",
  "https://img.icons8.com/material/24/737373/circled-x.png",
];

export const priorityArr = [
  {
    key: 0,
    value: "No Priority",
    image: "https://img.icons8.com/sf-regular-filled/48/more.png",
  },
  {
    key: 1,
    value: "Low",
    image: "https://img.icons8.com/small/16/low-connection.png",
  },
  {
    key: 2,
    value: "Medium",
    image: "https://img.icons8.com/small/16/medium-connection.png",
  },
  {
    key: 3,
    value: "High",
    image: "https://img.icons8.com/sf-regular/48/high-connection.png",
  },
  {
    key: 4,
    value: "Urgent",
    image:
      "https://img.icons8.com/sf-regular-filled/48/FA5252/high-priority.png",
  },
];
