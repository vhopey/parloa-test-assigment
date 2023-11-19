import { Customer } from "../types"

export const customer: Customer = {
  id: "1798e668-8eb3-424f-8af7-6e6da2515b14",
  isActive: true,
  company: "Doyle-Kessler",
  industry: "travel",
  projects: [
    {
      id: "e25fc621-1aed-4898-9714-090f300c75c8",
      name: "Grass-roots",
      contact: "fsimony1@hostgator.com",
      start_date: "2021-10-05T07:33:02Z",
      end_date: "2022-05-30T10:40:32Z",
    },
    {
      id: "64c726d0-c9a2-4a8f-a775-4340da21c721",
      name: "dynamic",
      contact: "lallibon2@bloglines.com",
      start_date: "2022-01-05T11:54:14Z",
      end_date: "2022-03-31T17:50:50Z",
    },
    {
      id: "fa93c65a-0433-479f-bcaa-27fab7b5c57d",
      name: "Ergonomic",
      contact: "shyslop3@usatoday.com",
      start_date: "2021-12-03T22:51:58Z",
      end_date: null,
    },
  ],
  about:
    "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
}

export const customerList = [
  customer,
  {
    ...customer,
    id: "1928e668-8eb3-424f-8af7-6e6da2515b15",
    company: "Kessler",
  },
]
