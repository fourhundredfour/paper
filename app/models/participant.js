import Model, { attr, hasOne } from '@ember-data/model';

export default class ParticipantModel extends Model {
  @attr('string') name;
  @attr('string') address;
  @attr('string') mailAddress;
  @attr('string') phoneNumber;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) createdAt;
  @hasOne('list') list;
}
