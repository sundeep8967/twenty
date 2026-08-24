import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkspaceIteratorModule } from 'src/database/commands/command-runners/workspace-iterator.module';
import { ReownObjectNavigationCommandMenuItemsCommand } from 'src/database/commands/upgrade-version-command/2-36/2-36-workspace-command-1787573270000-reown-object-navigation-command-menu-items.command';
import { FlagStandardActionCommandMenuItemsSystemSideEffectCommand } from 'src/database/commands/upgrade-version-command/2-36/2-36-workspace-command-1787573271000-flag-standard-action-command-menu-items-system-side-effect.command';
import { CommandMenuItemEntity } from 'src/engine/metadata-modules/command-menu-item/entities/command-menu-item.entity';
import { WorkspaceCacheModule } from 'src/engine/workspace-cache/workspace-cache.module';
import { WorkspaceMigrationRunnerModule } from 'src/engine/workspace-manager/workspace-migration/workspace-migration-runner/workspace-migration-runner.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommandMenuItemEntity]),
    WorkspaceCacheModule,
    WorkspaceIteratorModule,
    WorkspaceMigrationRunnerModule,
  ],
  providers: [
    ReownObjectNavigationCommandMenuItemsCommand,
    FlagStandardActionCommandMenuItemsSystemSideEffectCommand,
  ],
})
export class V2_36_UpgradeVersionCommandModule {}
