import Model, { attr, hasMany } from '@ember-data/model';

export default class ListModel extends Model {
  @attr('string') name;
  @attr('string') informationText;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) createdAt;
  @hasMany('participant') participants;
}
