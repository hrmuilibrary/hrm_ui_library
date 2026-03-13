import{j as o}from"./jsx-runtime-LFUCOF7Y.js";import{r as b}from"./iframe-DC_nJ6hE.js";import{M,a as f}from"./Popover-CpgCTNh4.js";import{a as x}from"./IconArrowDownloadFilled-BEo2jdVK.js";import{S as T}from"./index-CqWPWqeT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-CfTNx9Qa.js";import"./types-BOkIULGl.js";import"./helpers-D13QQKuw.js";import"./IconDismiss-Bba1Raav.js";import"./Tooltip-DBKn5tLZ.js";import"./Text-BGxii9Ol.js";import"./Button-gtpO-8LA.js";import"./Link-CQnTDBH6.js";import"./NestedMenu-Ca538ym9.js";import"./index-eFDGrJCs.js";import"./CollapseGroup-DKawTQuG.js";import"./Divider-C5fE1Zx_.js";import"./AnimatePresenceWrapper-8L-i1Uyl.js";import"./IconChevronDown-1PyfCtSk.js";import"./IconChevronUp-BCKN41tf.js";import"./IconChevronRight-DfV37wF_.js";import"./AvatarGroup-DuW-eRO4.js";import"./DropzoneFileUpload-BlwVTK1S.js";import"./Label-C6BSI9XD.js";import"./useFormProps-BuxPBVGZ.js";import"./ErrorMessage-D7NxEEPw.js";import"./IconDynamicComponent-DVu66zYu.js";import"./Snackbar-D3QppFK9.js";import"./Alert-DzGkT5lC.js";import"./IconDismissFilled-_SnWZYtc.js";import"./Progress-BoBjaFhh.js";import"./IconAdd-Ctyu1kY_.js";import"./Checkbox-Xxu9iOhD.js";import"./IconInfo-BMIAQGfS.js";import"./IconCheckmark-CaN5Glqj.js";import"./Empty-DV0s6cXK.js";import"./Image-qdprQg33.js";import"./Input-BOzAusW7.js";import"./IconCheckmarkCircleFilled-hymiXfNI.js";import"./IconChevronLeft-CA_WWZ9W.js";import"./IconCaretDownFilled-soNJtkdy.js";import"./extends-CF3RwP-h.js";import"./Tab-28BevQrY.js";import"./Badge-D2SyvJ0d.js";import"./IconMore-CNj9-qy0.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
