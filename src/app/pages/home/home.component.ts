import { ImageModule } from 'primeng/image';
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
@Component({
  selector: 'home',
  standalone: true,
  templateUrl: 'home.component.html',
  imports: [RouterModule, ImageModule, TabViewModule, ButtonModule]
})
export class HomeComponent implements OnInit {
  listProducts = [
    {
      name: "Calendar 1",
      slug: "calendar-1",
      img: "./assets/calendar/3104505.jpg"
    },
    {
      name: "Calendar 2",
      slug: "calendar-2",
      img: "./assets/calendar/4612453354.jpeg"
    },
    {
      name: "Calendar 3",
      slug: "calendar-3",
      img: "./assets/calendar/6599348.jpg"
    },
    {
      name: "Calendar 4",
      slug: "calendar-4",
      img: "./assets/calendar/9887275.jpg"
    },
    {
      name: "Calendar 5",
      slug: "calendar-5",
      img: "./assets/calendar/4612453354.jpeg"
    },
    {
      name: "Calendar 6",
      slug: "calendar-6",
      img: "./assets/calendar/5869923.jpg"
    },
    {
      name: "Calendar 7",
      slug: "calendar-7",
      img: "./assets/calendar/6599348.jpg"
    },
    {
      name: "Calendar 8",
      slug: "calendar-8",
      img: "./assets/calendar/4612453354.jpeg"
    }
  ]
  listTabViewProducts = [
    {
      header: 'Danh mục 1',
      slug: 'danh-muc-1',
      items: [
        {
          name: "Calendar 1",
          slug: "calendar-1",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 2",
          slug: "calendar-2",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 3",
          slug: "calendar-3",
          img: "./assets/calendar/9887275.jpg"
        },
        {
          name: "Calendar 4",
          slug: "calendar-4",
          img: "./assets/calendar/4612453354.jpeg"
        },
        {
          name: "Calendar 5",
          slug: "calendar-5",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 6",
          slug: "calendar-6",
          img: "./assets/calendar/4612453354.jpeg"
        },
        {
          name: "Calendar 7",
          slug: "calendar-7",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 8",
          slug: "calendar-8",
          img: "./assets/calendar/9887275.jpg"
        }
      ],
    },
    {
      header: 'Danh mục 2',
      slug: 'danh-muc-2',
      items: [
        {
          name: "Calendar 1",
          slug: "calendar-1",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 2",
          slug: "calendar-2",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 3",
          slug: "calendar-3",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 4",
          slug: "calendar-4",
          img: "./assets/calendar/9887275.jpg"
        },
        {
          name: "Calendar 5",
          slug: "calendar-5",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 6",
          slug: "calendar-6",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 7",
          slug: "calendar-7",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 8",
          slug: "calendar-8",
          img: "./assets/calendar/9887275.jpg"
        },
        {
          name: "Calendar 9",
          slug: "calendar-9",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 10",
          slug: "calendar-10",
          img: "./assets/calendar/5869923.jpg"
        }
      ],
    },
    {
      header: 'Danh mục 3',
      slug: 'danh-muc-3',
      items: [
        {
          name: "Calendar 2",
          slug: "calendar-2",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 3",
          slug: "calendar-3",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 4",
          slug: "calendar-4",
          img: "./assets/calendar/9887275.jpg"
        },
        {
          name: "Calendar 5",
          slug: "calendar-5",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 6",
          slug: "calendar-6",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 7",
          slug: "calendar-7",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 8",
          slug: "calendar-8",
          img: "./assets/calendar/9887275.jpg"
        },
        {
          name: "Calendar 9",
          slug: "calendar-9",
          img: "./assets/calendar/3104505.jpg"
        },
        {
          name: "Calendar 10",
          slug: "calendar-10",
          img: "./assets/calendar/5869923.jpg"
        },
        {
          name: "Calendar 11",
          slug: "calendar-11",
          img: "./assets/calendar/6599348.jpg"
        },
        {
          name: "Calendar 12",
          slug: "calendar-12",
          img: "./assets/calendar/9887275.jpg"
        },
      ],
    },
  ]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
