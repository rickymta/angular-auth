import { Component } from '@angular/core';
import { CardSettingsModel, KanbanAllModule } from '@syncfusion/ej2-angular-kanban';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    KanbanAllModule,
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent {
  public data: Object[] = [
    {
      Id: 1,
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
    },
    {
      Id: 2,
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Type: 'Bug',
      Priority: 'Release Breaker',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
    },
    {
      Id: 3,
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
    },
    {
      Id: 4,
      Status: 'Close',
      Summary: 'Arrange a web meeting with the customer to get the login page requirements.',
      Type: 'Others',
      Priority: 'Low',
      Tags: 'Meeting',
      Estimate: 2,
      Assignee: 'Michael Suyama',
      RankId: 1,
    },
    {
      Id: 5,
      Status: 'Validate',
      Summary: 'Validate new requirements',
      Type: 'Improvement',
      Priority: 'Low',
      Tags: 'Validation',
      Estimate: 1.5,
      Assignee: 'Robert King',
      RankId: 1,
    },
  ];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
  };
}
