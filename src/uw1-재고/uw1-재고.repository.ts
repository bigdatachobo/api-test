import { EntityRepository, Repository } from 'typeorm';
import { UW1재고 } from './uw1-재고.entity';

@EntityRepository(UW1재고)
export class UW1재고Repository extends Repository<UW1재고> {
  async findAll(): Promise<UW1재고[]> {
    return await this.find();
  }

  async findById(관리번호: string): Promise<UW1재고> {
    return await this.findOne({ where: { 관리번호 } }); // 수정된 부분
  }

  async createUW1재고(uw1재고Data: Partial<UW1재고>): Promise<UW1재고> {
    const uw1재고 = this.create(uw1재고Data);
    await this.save(uw1재고);
    return uw1재고;
  }

  async updateUW1재고(
    관리번호: string,
    uw1재고Data: Partial<UW1재고>,
  ): Promise<UW1재고> {
    await this.update(관리번호, uw1재고Data);
    return await this.findOne({ where: { 관리번호 } });
  }

  async deleteUW1재고(관리번호: string): Promise<void> {
    await this.delete(관리번호);
  }
}
