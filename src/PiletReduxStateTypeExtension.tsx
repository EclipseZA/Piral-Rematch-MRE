import { NamedModel } from '@rematch/core';
import 'piral-core';

declare module 'piral-core/lib/types/custom' {
	interface PiralCustomRegistryState {
		reduxStoreSlices: NamedModel<any, any>[]
	}
}

