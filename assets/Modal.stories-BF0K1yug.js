import{j as o}from"./jsx-runtime-C5SBGurE.js";import{r as b}from"./iframe-c-PHskCW.js";import{M,a as f}from"./Popover-BRJBNGV2.js";import{a as x}from"./IconArrowDownloadFilled-JO1SmYwB.js";import{S as T}from"./index-cLuoO-SJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-SAL3rGAq.js";import"./types-VyDI_scB.js";import"./helpers-BDV50xAg.js";import"./IconDismiss-3uX42Loi.js";import"./Tooltip-NkvAKDIl.js";import"./Text-DSN2Q_c0.js";import"./index-Dod7zPAY.js";import"./Button-4VAfJckQ.js";import"./Link-BtJ-N-DY.js";import"./NestedMenu-T-AY2EAi.js";import"./CollapseGroup-CjqdoZ8C.js";import"./Divider-a9orLmuL.js";import"./AnimatePresenceWrapper-DvsDj7I5.js";import"./IconChevronDown-NqsHfSgs.js";import"./IconChevronUp-CcJOZhNr.js";import"./IconChevronRight-CAmnRV3E.js";import"./AvatarGroup-CE9jOx-t.js";import"./DropzoneFileUpload-UgzLOEnw.js";import"./Label-C-p9oE_d.js";import"./useFormProps-8uxq7CRB.js";import"./ErrorMessage-DcZt2I4D.js";import"./IconDynamicComponent-C64Q3mSW.js";import"./Snackbar-D4DmePlY.js";import"./Alert-B8RJ_uYz.js";import"./IconDismissFilled-BZYbJOR1.js";import"./Progress-Co5x6wsn.js";import"./IconAdd-CjNSGPrE.js";import"./Checkbox-Dvil3clU.js";import"./IconInfo-DCuCMcrC.js";import"./IconCheckmark-D80lg2Z-.js";import"./Empty-BbeiK_IN.js";import"./Image-BcKMMlxX.js";import"./Input-pIYNiYDi.js";import"./IconCheckmarkCircleFilled-D-wqTKlL.js";import"./IconChevronLeft-BjbuuVUT.js";import"./IconCaretDownFilled-BnsKNl4o.js";import"./extends-CF3RwP-h.js";import"./Tab-BF5dAp2G.js";import"./Badge-DL-moRmI.js";import"./IconMore-Kj6yplM_.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
