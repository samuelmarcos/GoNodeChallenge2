import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { tr } from 'date-fns/locale';

export default class AddAvatarFieldToUsers1589916496000
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'avatar',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'avatar');
    }
}
