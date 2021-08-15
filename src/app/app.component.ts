import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';

  sections = [
    {
      heading: ' Work History',
      details: [
        {
          timeframe: 'September 2019 to Current',
          position: 'Consultant',
          organization: 'Opentext Hyderabad, TS',
          activities: [
            {
              activityHeading: 'Angular 2+ - Front end development',
              activityInfo: [
                'Created Components and User Interface with Forms,tabs with use of features of angular.'
              ]
            },
            {
              activityHeading: 'Certified on Opentext Appworks Process Platform V16',
              activityInfo: [
                `Contributed to create workflow's for End to End process handling.`,
                `Contributed to create REST services for consumption from Front end.`
              ]
            },
            {
              activityHeading: 'Certified on Opentext Magellan Analytics Designer V16',
              activityInfo: [
                `Created reports with table structure for user policy information`,
                `Created reports with crosstab based layout (Work Scheduling)`
              ]
            },
          ]
        },
        {
          timeframe: 'January 2018 to September 2019',
          position: 'Application Development Senior Analyst',
          organization: 'Accenture Chennai, TN',
          activities: [
            {
              activityHeading: '',
              activityInfo: [
                'Formulated strategies for application development framework creation and developmental processes.',
                'Communicated directly with project stakeholders, providing timely updates on project advancement.',
                'Analyzed and developed technical solutions to meet business requirements.',
                'Contributed to create workflows for end to end process handling.',
                "Contributed to create REST API services for consumption from front end.",
                'Learned and shared knowledge of new technologies to support technically challenging projects and assume various responsibilities.'
              ]
            }
          ]
        },
        {
          timeframe: 'August 2015 to December 2017',
          position: 'Test Engineer Analyst.',
          organization: 'Accenture Chennai, TN',
          activities: [
            {
              activityHeading: 'Mainframe -Functional and Automated Testing',
              activityInfo: [
                'Contributed to functional testing for an insurance client.',
                'Automated the repetitive activities done for Test Data Preparation in Mainframe System.',
                'Automated Daily Mainframe Batch Cycles to be done for Test Environments.'
              ]
            }
          ]
        },
        {
          timeframe: 'June 2015 to August 2015',
          position: 'Associate Software Developer ',
          organization: 'Accenture Chennai, TN',
          activities: [
            {
              activityHeading: 'COBOL - Training and Development',
              activityInfo: [
                'Contributed to development of COBOL Programs for a short period of time.'
              ]
            }
          ]
        }
      ]
    },
    {
      heading: 'Education',
      details: [{
        timeframe: 'August 2011 to May 2015',
        position: 'Bachelor of Engineering Electronics And Communications Engineering  ',
        organization: 'CAHCET Vellore',
        activities: []
      }]
    },
    {
      heading: 'Accomplishments',
      details: [{
        timeframe: '',
        position: '',
        organization: '',
        activities: [{
          activityHeading: '',
          activityInfo: [
            ' Awarded as Star Performer and Significant Contributor Multiple times',
            'Received "Innovation Award" For automating manual testing process.',
            'Awarded for creating Chatbot using IBM Watson for Android (Prototype) to explain Insurance policies.',
            'Awarded for creating Android app , for Online Claim Submission for Insurance client.'

          ]
        }]
      }]
    }
  ]

  

}
