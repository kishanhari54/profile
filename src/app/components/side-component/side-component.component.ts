import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-component',
  templateUrl: './side-component.component.html',
  styleUrls: ['./side-component.component.scss']
})
export class SideComponentComponent implements OnInit {

  constructor() { }

  contactSection = [{ title: 'Address', value: 'Vellore, TN' }
    , { title: 'Phone', value: '8903457705' },
  { title: 'Email', value: 'kishanhari54@gmail.com' }
  ]

  skillSection = [
    {
      category: 'Web Development',
      categoryDetails: [
        { skill: 'HTML', rating: 4 },
        { skill: 'CSS', rating: 4 },
        { skill: 'JS', rating: 4 },
        { skill: 'Angular 2+', rating: 4 },
      ]
    },
    {
      category: 'Database',
      categoryDetails: [
        { skill: 'MS-SQL', rating: 4 },
        { skill: 'MongoDB', rating: 4 }
      ]
    },
    {
      category: 'Version Control',
      categoryDetails: [
        { skill: 'Tortoise SVN', rating: 4 },
        { skill: 'Github', rating: 4 }
      ]
    },
    {
      category: 'Others',
      categoryDetails: [
        { skill: 'Appworks Process Platform', rating: 4 },
        { skill: 'IHub Reporting', rating: 4 }
      ]
    }

  ]

  languages = ['Hindi' ,'Tamil', 'English']
  ngOnInit(): void {
  }

}
