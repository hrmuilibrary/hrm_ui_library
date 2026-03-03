import{j as o}from"./jsx-runtime-Bnc0UR-1.js";import{r as b}from"./iframe-BZIurmLL.js";import{M,a as f}from"./Popover-9xp8DBb4.js";import{a as x}from"./IconArrowDownloadFilled-YjyEYrFF.js";import{S as T}from"./index-VrdXU4j5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-BjEPROo0.js";import"./types-CcV29qzA.js";import"./helpers-OJly0rMZ.js";import"./IconDismiss-C5rK1avL.js";import"./Tooltip-B2eS1kYw.js";import"./Text-6FThkw6b.js";import"./Button-BxhcRfmC.js";import"./Link-CKUqEncv.js";import"./NestedMenu-NpdjcY8n.js";import"./index-UW4fake6.js";import"./CollapseGroup-ABlOhseB.js";import"./Divider-BXpe8z3n.js";import"./AnimatePresenceWrapper-CVmhcNgf.js";import"./IconChevronDown-CPvek1Yj.js";import"./IconChevronUp-CLMNQGkj.js";import"./IconChevronRight-D9WxNQYO.js";import"./AvatarGroup-CXkvbTAs.js";import"./DropzoneFileUpload-CHqL7Z4f.js";import"./Label-CWoh20B6.js";import"./useFormProps-p0CYaqcD.js";import"./ErrorMessage-Dlhdv7jc.js";import"./IconDynamicComponent-BcyvGVX9.js";import"./Snackbar-DXKWBBz1.js";import"./Alert-Bnohz2y-.js";import"./IconDismissFilled-DfFO6Du5.js";import"./Progress-Z_lJcC5q.js";import"./IconAdd-BCmvL__q.js";import"./Checkbox-CC5L-L2u.js";import"./IconInfo-dD1cPBZG.js";import"./IconCheckmark-DmsWReUK.js";import"./Empty-DKIdu6yU.js";import"./Image-DXn9Mnhb.js";import"./Input-bp707dTV.js";import"./IconCheckmarkCircleFilled-cNUvREwy.js";import"./IconChevronLeft-DTCEMtQz.js";import"./IconCaretDownFilled-DhC_bI0_.js";import"./extends-CF3RwP-h.js";import"./Tab-6-dw-c30.js";import"./Badge-CPNYgzlf.js";import"./IconMore-BW80NS5b.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
