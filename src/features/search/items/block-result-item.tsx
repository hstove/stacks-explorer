import { Caption, Text, Title } from '@components/typography';
import { addSepBetweenStrings, toRelativeTime, truncateMiddle } from '@common/utils';
import pluralize from 'pluralize';
import React from 'react';
import { color, Flex, Stack } from '@stacks/ui';
import { FoundResult } from '@common/types/search-results';
import { BlockLink } from '@components/links';
import { ItemIcon } from '@components/item-icon';
import { SafeSuspense } from '@components/ssr-safe-suspense';
import { ResultItemWrapper } from '@features/search/items/result-item-wrapper';

const BlocksCaption = ({ txsCount }: { txsCount: number }) => {
  return (
    <Caption>{addSepBetweenStrings([`${txsCount} ${pluralize('transaction', txsCount)}`])}</Caption>
  );
};

interface BlockResultItemProps {
  result: FoundResult;
}

export const BlockResultItem: React.FC<BlockResultItemProps> = ({ result }) => {
  if (!result || result.result.entity_type !== 'block_hash') return null;
  return (
    <BlockLink hash={result.result.block_data.hash as string}>
      <ResultItemWrapper>
        <Flex alignItems="center">
          <ItemIcon type="block" />
          <Stack spacing="tight" ml="base">
            <Title display="block" className={'search-result-title'}>
              Block #{result.result.block_data.height}
            </Title>
            <SafeSuspense fallback={<Caption>Loading...</Caption>}>
              <BlocksCaption txsCount={result.result.tx_count} />
            </SafeSuspense>
          </Stack>
        </Flex>
        <Stack textAlign="right" justifyContent="flex-end" spacing="tight">
          <Text ml="tight" fontSize="14px" textAlign="right" color={color('text-body')}>
            {toRelativeTime((result.result.block_data.burn_block_time as number) * 1000)}
          </Text>
          <Caption>{truncateMiddle(result.result.block_data.hash as string)}</Caption>
        </Stack>
      </ResultItemWrapper>
    </BlockLink>
  );
};
