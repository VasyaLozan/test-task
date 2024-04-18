import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-words-game',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
    JsonPipe
  ],
  templateUrl: './words-game.component.html',
  styleUrl: './words-game.component.css'
})
export class WordsGameComponent {

  word: string = ''
  words: string[] = []
  exist = false

  addWord(word: string) {
    this.exist = false;
    this.word = ''
    if (this.words.includes(word.trim().toLowerCase())) {
      this.exist = true;
    } else {
      this.words.push(word.trim().toLowerCase())
    }
  }
}
