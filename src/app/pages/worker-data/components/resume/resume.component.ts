import { Component } from "@angular/core";
import { faSuitcase, faUniversity, faList, faLanguage, faCheck } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: "cv-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent {

  public case = faSuitcase;
  public study = faUniversity;
  public list = faList;
  public lang = faLanguage;
  public check = faCheck;

  public knowledgeList = [
    {id: 1, name: 'Task Management: Jira, Asana, Trello'},
    {id: 2, name: 'Source management: Github, bitbucket'},
    {id: 3, name: 'Problem-Solving'},
    {id: 4, name: 'Teamwork'},
    {id: 5, name: 'Agile methodology'},
    {id: 6, name: 'UI design'},
    {id: 7, name: 'Responsive design skills'},
    {id: 8, name: 'Testing and debugging skills'},
    {id: 9, name: 'Web development with JavaScript, Angular'},
    {id: 10, name: 'Excellent skills in HTML5,CSS3'},
  ]

}
