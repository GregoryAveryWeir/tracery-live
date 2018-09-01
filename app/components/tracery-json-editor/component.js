import JsonEditor from 'ember-cli-jsoneditor/components/json-editor';
import {isEmpty} from '@ember/utils';

export default JsonEditor.extend({
  onBadChange: null,

  getOptions() {
    var sup = this._super(...arguments);
    sup.onChange = () => {
      this._isTyping = true;
      const editor = this.get('editor');
      try {
        this.get('onChange')(editor.get());
      } catch(err) {
        if(isEmpty(editor.getText())) {
          this.get('onChange')({});
        } else {
          this.get('onBadChange')(err);
        }
      }
      this._isTyping = false;
    };
    return sup;
  }
});
