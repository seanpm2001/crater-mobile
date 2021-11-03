import {INavigation} from '@/interfaces';

export interface IProps {
  /**
   * It is a update screen view.
   */
  isEditScreen?: boolean;

  /**
   * An array of objects with data for each note.
   */
  notes?: Array<any>;

  /**
   * An action to return a list of notes.
   */
  getNotes?: () => void;

  /**
   * A navigator is an object of navigation functions that a view can call.
   * @see INavigation
   */
  navigation?: INavigation;

  /**
   * Current parent screen.
   */
  noteType?: string;

  /**
   * Return when item select.
   */
  onSelect?: (fun: object) => void;
}
