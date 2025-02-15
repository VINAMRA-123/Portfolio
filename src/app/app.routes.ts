import { Component } from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', component: HomeComponent},
{path: 'projects',component:ProjectsComponent},
{path: 'contact',component:ContactComponent},
{path: 'about',component:AboutComponent},
{path: 'home',component:HomeComponent},
{path: '**',component:ErrorPageComponent}
];
