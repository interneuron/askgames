import { Module } from '@nestjs/common';
import { StateService } from './state.service';

@Module({
  components: [
    StateService,
  ],
  exports: [
    StateService,
  ],
})
export class StateModule {
}
