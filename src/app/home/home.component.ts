import { Component } from '@angular/core';

import mappings from '../mappings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent  {
  public isPickerToggled = false;
  public content: any;

  togglePicker() {
    this.isPickerToggled = !this.isPickerToggled;
  }

  addEmoji(emojiObject) {
    document.getElementById('message-area').innerHTML += emojiObject.emoji.native;
  }

  sendMessage() {
    this.content = document.getElementById('message-area').textContent;
    for (let i = 0; i < mappings.length; i++) {
      if (this.content.includes(mappings[i].text)) {
        this.content.indexOf(mappings[i].text);
      }
    }
  }
}
