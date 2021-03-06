import React, { useState } from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeMainPageStyles } from './Styles';
import icon from '../../assets/Icon.png';
import { Menu } from '@material-ui/icons';
import { NumericSpacer } from '../../core/components/Spacers';
import { QuickLinkCardList } from '../../core/components/quickLinkCardList/QuickLinkCardList';
import { Dictionary, QuickLink } from '../../core/Types';
import { QuickLinkManager } from '../../core/components/quickLinkManager/QuickLinkManager';

interface Props {
  quickLinkList: Dictionary<QuickLink>;
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainPage = (props: Props) => {
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [quickLinkToEdit, setQuickLinkToEdit] = useState<QuickLink | null>(null);
  const styles = makeMainPageStyles();

  return (
    <Container className={styles.mainContainer}>
      <Container className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={icon} className={styles.rapidTabsIcon} alt="Rapid Tabs" />
          <NumericSpacer size={10} />
          <Typography variant="h4">Rapid Tabs</Typography>
        </div>
        <IconButton color={'inherit'} className={styles.iconButton}>
          <Menu className={styles.icon} />
        </IconButton>
      </Container>

      <Container className={styles.body}>
        <QuickLinkCardList
          quickLinkList={props.quickLinkList}
          openManager={(quickLink: QuickLink | null) => {
            setQuickLinkToEdit(quickLink);
            setIsManagerOpen(true);
          }}
        />
      </Container>
      <QuickLinkManager
        isOpen={isManagerOpen}
        closeModal={() => setIsManagerOpen(false)}
        removeQuickLink={props.removeQuickLink}
        editQuickLink={props.editQuickLink}
        addQuickLink={props.addQuickLink}
        incomingQuickLink={quickLinkToEdit}
      />
    </Container>
  );
};
