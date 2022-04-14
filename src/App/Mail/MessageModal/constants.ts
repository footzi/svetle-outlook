import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faItalic,
  faStrikethrough,
  faFill
} from '@fortawesome/free-solid-svg-icons';

export enum MessageEditorOperations {
  BOLD = 'bold',
  ITALIC = 'italic',
  STRIKE_THROUGH = 'strikeThrough',
  JUSTIFY_LEFT = 'justifyLeft',
  JUSTIFY_CENTER = 'justifyCenter',
  JUSTIFY_RIGHT = 'justifyRight',
  JUSTIFY_FULL = 'justifyFull',
  FORE_COLOR = 'foreColor',
  HILITE_COLOR = 'hiliteColor'
}

export const FORM_TEXT_OPERATIONS = [
  {
    type: MessageEditorOperations.BOLD,
    icon: faBold
  },
  {
    type: MessageEditorOperations.ITALIC,
    icon: faItalic
  },
  {
    type: MessageEditorOperations.STRIKE_THROUGH,
    icon: faStrikethrough
  }
];

export const ALIGN_TEXT_OPERATIONS = [
  {
    type: MessageEditorOperations.JUSTIFY_LEFT,
    icon: faAlignLeft
  },
  {
    type: MessageEditorOperations.JUSTIFY_CENTER,
    icon: faAlignCenter
  },
  {
    type: MessageEditorOperations.JUSTIFY_RIGHT,
    icon: faAlignRight
  },
  {
    type: MessageEditorOperations.JUSTIFY_FULL,
    icon: faAlignJustify
  }
];

export const COLOR_OPERATIONS = [
  {
    type: MessageEditorOperations.FORE_COLOR,
    icon: null,
    defaultColor: 'black'
  },
  {
    type: MessageEditorOperations.HILITE_COLOR,
    icon: faFill,
    defaultColor: 'white'
  }
];
