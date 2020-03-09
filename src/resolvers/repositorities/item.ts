
import { Repository, EntityRepository } from "typeorm";
import { Item } from "../../entities/item";
import { AddItemInput } from "../types/item-input";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {

  async initItem(addItemInput: AddItemInput) {
    let newItem: Item;
    try {
      // const albumDetails = await this.mb.getAlbumMetadata(addItemInput);
      // newItem = await this.findOne(newItem.mbid);

      // TEMPORARY
      let albumDetails = addItemInput;
      albumDetails.mbid = 'fakembid';

      if (!newItem) {
        newItem = new Item();
      }
      newItem.artist = albumDetails.artist;
      newItem.name = albumDetails.album;
      newItem.mbid = albumDetails.mbid;
      this.save(newItem);
      return newItem;
    }
    catch(err) {
      return new Error('Album cannot be found in MusicBrainz database');
    }
  }
}