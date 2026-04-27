import{j as o}from"./jsx-runtime-CbWUKrAM.js";import{r as b}from"./iframe-QrAhYgZ6.js";import{M,a as f}from"./Popover-BpBS8_wD.js";import{a as x}from"./IconArrowDownloadFilled-Bfu1q0xE.js";import{S as T}from"./index-CcpFHF85.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-v0UoQ_dC.js";import"./types-504vuPxv.js";import"./helpers-BkG-ueoU.js";import"./IconDismiss-CNA-a338.js";import"./Tooltip-TrSNQlsu.js";import"./Text-C1G-C2s2.js";import"./index-B8fHE7Vh.js";import"./Button-R7IQHb37.js";import"./Link-251B34DJ.js";import"./NestedMenu-U9hwnwyv.js";import"./CollapseGroup-LO88GLhg.js";import"./Divider-DKK8rD_l.js";import"./AnimatePresenceWrapper-Dkxlp2Eo.js";import"./IconChevronDown-V0JwDFl-.js";import"./IconChevronUp-DzftSnUt.js";import"./IconChevronRight-C5jsflaB.js";import"./AvatarGroup-CbI79wGh.js";import"./DropzoneFileUpload-cA1XQx9z.js";import"./Label-j_yBuxkt.js";import"./useFormProps-B8UimY0F.js";import"./ErrorMessage-ClG4Y-aL.js";import"./IconDynamicComponent-DA2Ncl58.js";import"./Snackbar-Com4E3tr.js";import"./Alert-DkLv__H0.js";import"./IconDismissFilled-I1yFZtpg.js";import"./Progress-JIbIkId5.js";import"./IconAdd-brguhqFP.js";import"./Checkbox-1VL_1e4H.js";import"./IconInfo-BuPKL2u_.js";import"./IconCheckmark-DTzYn64O.js";import"./Empty-CW5Nptjz.js";import"./Image-BXISt_Sc.js";import"./Input-CMW2WBLL.js";import"./IconCheckmarkCircleFilled-HcVRVtLF.js";import"./IconChevronLeft-0zZHlt4P.js";import"./IconCaretDownFilled-D4rFONNS.js";import"./extends-CF3RwP-h.js";import"./Tab-k4XwNdNg.js";import"./Badge-BYIHR--1.js";import"./IconMore-CIs3vzbY.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
