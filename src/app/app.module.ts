import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { TournamentService } from './services/tournament.service';
import { TeamService } from './services/team.service';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentCreateComponent } from './tournament/tournament-create/tournament-create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TournamentBracketComponent } from './tournament/tournament-bracket/tournament-bracket.component';
import { TeamCreationComponent } from './teams/team-creation/team-creation.component';
import { UserCreationComponent } from './users/user-creation/user-creation.component'
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { SignupFormComponent } from './users/signup-form/signup-form.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { TeamProfileComponent } from './teams/team-profile/team-profile.component';
import { TeamEditformComponent } from './teams/team-editform/team-editform.component';

import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamsComponent } from './teams/teams.component';
import { JoinTeamComponent } from './teams/join-team/join-team.component';


const routes: Routes = [
  {
    path: 'allteams',
    component: TeamListComponent
  },
  {
    path:'team/:id',
    component: TeamProfileComponent
  },
  {
    path: 'team/creation',
    component: TeamCreationComponent
  },
  
  { path: 'signup', 
    component: UserCreationComponent
  },
  { path: 'login',
    component: LoginFormComponent
  },
  { path: 'home',
  // redirectTo: '/',will test you later.
  // pathMatch: 'full'
    component: MainMenuComponent
  },
  { path: 'tournament/teamlist',  
    component: TeamCreationComponent 
  },
  { path: 'tournament', 
    component: TournamentComponent 
  },
  { path: 'tournament/create', 
    component: TournamentCreateComponent 
  },
  { path: '', 
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', 
    redirectTo: '/',
    pathMatch: 'full' 
  }
  ];

// sample inside route array   {path: 'api/tasks/delete/:id', component: TodoListComponent}
  
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TournamentComponent,
    TournamentCreateComponent,
    TournamentBracketComponent,
    TeamCreationComponent,
    UserCreationComponent,
    NavBarComponent,
    MainMenuComponent,
    SignupFormComponent,
    LoginFormComponent,
    UserProfileComponent,
    TeamProfileComponent,
    TeamEditformComponent,
    TeamListComponent,
    TeamsComponent,
    JoinTeamComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(
      routes,
    {enableTracing: true}
  )
  ],
  providers: [TournamentService, UserService, TeamService],

  bootstrap: [AppComponent]
})
export class AppModule { }
