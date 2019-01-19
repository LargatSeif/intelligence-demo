import { Component, OnInit } from '@angular/core';

import { Question } from '../../models/question.model';
import { form } from '../../models/form.model';
import { Type } from '../../models/type.model';

import { QuestionService } from '../../services/question.service';
import { Subscription } from 'rxjs/Subscription';
import { DragulaService } from 'ng2-dragula';
import { DragulaOptions } from 'ng2-dragula';

@Component({
  selector: 'app-form-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
  providers: [QuestionService]
})
export class BuilderComponent implements OnInit {
  dragulaBag: string = "questions-dnd-bag"
  public dragulaBagOptions: DragulaOptions = {
    isContainer: function (el) {
      return false; // only elements in drake.containers will be taken into account
    },
    moves: function (el, source, handle, sibling) {
      return true; // elements are always draggable by default
    },
    accepts: function (el, target, source, sibling) {
      return true; // elements can be dropped in any of the `containers` by default
    },
    invalid: function (el, handle) {
      return false; // don't prevent any drags from initiating by default
    },
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: true,                       // elements are moved by default, not copied
    copyItem: (question: Question) => { // create a new memory pointer for the copied Element to avoid memory issue
      let copiedElement =  new Question();
      Object.assign(copiedElement, question);  
      return copiedElement;
    },
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    ignoreInputTextSelection: false     // allows users to select input text, see details below
  };
  // RxJS Subscription is an excellent API for managing many unsubscribe calls.
  // See note below about unsubscribing.
  private subs = new Subscription();

  public typesList: Type[];
  public typesListSub: Subscription;
  public formSub: Subscription;
  public form: form;
  public questionsList: Question[];

  constructor(private dragulaService: DragulaService, private q_service: QuestionService) {
    this.dragulaService.createGroup(this.dragulaBag, this.dragulaBagOptions);

    // These will get events limited to the VAMPIRES group.
    this.subs.add(this.dragulaService.drag(this.dragulaBag)
      .subscribe(({ name, el, source }) => {
        // ...
      })
    );
    this.subs.add(this.dragulaService.drop(this.dragulaBag)
      .subscribe(({ name, el, target, source, sibling }) => {
        // ...
      })
    );
    // some events have lots of properties, just pick the ones you need
    this.subs.add(this.dragulaService.dropModel(this.dragulaBag)
      // WHOA
      // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
      .subscribe(({ sourceModel, targetModel, item }) => {
        // ...
        console.log(item);

      })
    );

    // You can also get all events, not limited to a particular group
    this.subs.add(this.dragulaService.drop()
      .subscribe(({ name, el, target, source, sibling }) => {
        // ...
      })
    );
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.typesListSub = this.q_service.getQuestionsType$().subscribe((resp: any) => {
      this.typesList = resp.types;
    });

    this.formSub = this.q_service.getQuestions$().subscribe((resp: form) => {
      this.questionsList = resp.questions;
      this.form = resp;
    });
  }

  removeQuestion(question: Question) {
    const index = this.questionsList.indexOf(question);

    this.questionsList.splice(index, 1);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    this.typesListSub.unsubscribe();
    this.formSub.unsubscribe();
  }
}
