import{j as o}from"./jsx-runtime-CujgrDDU.js";import{r as b}from"./iframe--mYIEbPD.js";import{M,a as f}from"./Popover-GO1u087r.js";import{a as x}from"./IconArrowDownloadFilled-2hsf1jki.js";import{S as T}from"./index-DksQrhVr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-DvmWzZgk.js";import"./types-CPW0FzzB.js";import"./helpers-BUA6hngY.js";import"./IconDismiss-BEwo7qK2.js";import"./Tooltip-Df1X9mb-.js";import"./Text-BlsFxIWf.js";import"./index-CnXVRqMq.js";import"./Button-ZtiB0PpV.js";import"./Link-h667A7q8.js";import"./NestedMenu-CwVxWZsm.js";import"./CollapseGroup-CW35_kXH.js";import"./Divider-I7bdrS0c.js";import"./AnimatePresenceWrapper-CWwnMpzO.js";import"./IconChevronDown-C_-Tb943.js";import"./IconChevronUp-VJ4dpuxO.js";import"./IconChevronRight-C59cI28s.js";import"./AvatarGroup-C-q8BvFs.js";import"./DropzoneFileUpload-CWavgX_E.js";import"./Label-B5j2dTY9.js";import"./useFormProps-DEJfLM8a.js";import"./ErrorMessage-CnrQqthn.js";import"./IconDynamicComponent-B_fy4vdi.js";import"./Snackbar-CdAOisD9.js";import"./Alert-DLR8xzkb.js";import"./IconDismissFilled--kh0GTTf.js";import"./Progress-Bl_stm_D.js";import"./IconAdd-I3vU5-4C.js";import"./Checkbox-Do1XnpjM.js";import"./IconInfo-DrZaj1rP.js";import"./IconCheckmark-NRXYfHM3.js";import"./Empty-g2qp3MVs.js";import"./Image-D4yhu1gu.js";import"./Input-Bgjywp8b.js";import"./IconCheckmarkCircleFilled-Ca0bD1TD.js";import"./IconChevronLeft-xKcztnUI.js";import"./IconCaretDownFilled-gkyrKcQC.js";import"./extends-CF3RwP-h.js";import"./Tab-CJ5q025-.js";import"./Badge-asVYseoM.js";import"./IconMore-Cz0ayERV.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
