import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { ReportsModule } from './modules/reports/reports.module';
import { MapsModule } from './modules/maps/maps.module';
import { NeighborhoodsModule } from './modules/neighborhoods/neighborhoods.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { PredictionsModule } from './modules/predictions/predictions.module';
import { RecommendationsModule } from './modules/recommendations/recommendations.module';
import { VisionModule } from './modules/vision/vision.module';
import { AiModule } from './modules/ai/ai.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';
import { AdminModule } from './modules/admin/admin.module';
import { FilesModule } from './modules/files/files.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    ReportsModule,
    MapsModule,
    NeighborhoodsModule,
    NotificationsModule,
    AnalyticsModule,
    PredictionsModule,
    RecommendationsModule,
    VisionModule,
    AiModule,
    PaymentsModule,
    CampaignsModule,
    AdminModule,
    FilesModule,
    SettingsModule,
  ],
})
export class AppModule {}
