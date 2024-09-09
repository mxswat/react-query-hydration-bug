import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

// istanbul ignore next -- @preserve
export const getQueryClient = cache(() => new QueryClient());
