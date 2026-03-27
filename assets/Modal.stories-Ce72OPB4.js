import{j as o}from"./jsx-runtime-Cc-SByNV.js";import{r as b}from"./iframe-BESH0ZRu.js";import{M,a as f}from"./Popover-qH9fHl6q.js";import{a as x}from"./IconArrowDownloadFilled-BnpE8hPk.js";import{S as T}from"./index-DEUSTN-k.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-fQ655Ppb.js";import"./types-BTLoEQt4.js";import"./helpers-DC_cADke.js";import"./IconDismiss-BmBRX3xW.js";import"./Tooltip-BFQEBq7q.js";import"./Text-BBgmrqP6.js";import"./Button-CjUDU1V6.js";import"./Link-CJzB9Aib.js";import"./NestedMenu-CCoXLOvc.js";import"./index-BlY6LbMN.js";import"./CollapseGroup-DnehcNGZ.js";import"./Divider-BYoYp-I7.js";import"./AnimatePresenceWrapper-BZsOTDwD.js";import"./IconChevronDown-C4mdT55Q.js";import"./IconChevronUp-Cw-y5TZv.js";import"./IconChevronRight-DBv4miBS.js";import"./AvatarGroup-ChfpKUUS.js";import"./DropzoneFileUpload-uOV37kdo.js";import"./Label-DnLb2EVO.js";import"./useFormProps-CVPIzEzz.js";import"./ErrorMessage-C2J8w-kW.js";import"./IconDynamicComponent-ESUvog5V.js";import"./Snackbar-DT1uOZ5i.js";import"./Alert-CqAREesz.js";import"./IconDismissFilled-CWKQWUfz.js";import"./Progress-BY5H1DFJ.js";import"./IconAdd-BRjqdcD8.js";import"./Checkbox-Br5Y9_wM.js";import"./IconInfo-CT95hS3o.js";import"./IconCheckmark-Yh-cU_ll.js";import"./Empty-n9o9DrYp.js";import"./Image-C9uy5kQW.js";import"./Input-BKGNc3YO.js";import"./IconCheckmarkCircleFilled-DHjn_vD6.js";import"./IconChevronLeft-CQmSxxkN.js";import"./IconCaretDownFilled-DNwbcTom.js";import"./extends-CF3RwP-h.js";import"./Tab-D519AdCf.js";import"./Badge-DSg61TBd.js";import"./IconMore-DBOiF1bM.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
