import{j as o}from"./jsx-runtime-DnW06xKa.js";import{r as b}from"./iframe-BVgm8kLa.js";import{M,a as f}from"./Popover-BdWQLhAy.js";import{a as x}from"./IconArrowDownloadFilled-DoAhiJqu.js";import{S as T}from"./index-0hMtDUzt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-D-u9sh9c.js";import"./types-CnbeBJQT.js";import"./helpers-DAr_VmM3.js";import"./IconDismiss-BmkvdkVO.js";import"./Tooltip-BHBxO6pq.js";import"./Text-BcJhQMnT.js";import"./index-BibDvsnG.js";import"./Button-D8CKayDJ.js";import"./Link-D1BL-g1e.js";import"./NestedMenu-CRM8SMWN.js";import"./CollapseGroup-yoJl0_DD.js";import"./Divider-BSSPPMbb.js";import"./AnimatePresenceWrapper-wo7ImqbY.js";import"./IconChevronDown-Bc5fxa0I.js";import"./IconChevronUp-DmWQXv4M.js";import"./IconChevronRight-CjQs8WzP.js";import"./AvatarGroup-D6UvoaGN.js";import"./DropzoneFileUpload-DB2yoOLs.js";import"./Label-DbggNA0R.js";import"./useFormProps-BXbTdOxx.js";import"./ErrorMessage-eVKdZmgc.js";import"./IconDynamicComponent-BfnY55I4.js";import"./Snackbar-D-cR0YxG.js";import"./Alert-D1XerBst.js";import"./IconDismissFilled-CwMxjVRF.js";import"./Progress-DLxn3ndC.js";import"./IconAdd-B_bzxl7a.js";import"./Checkbox-BSpg4KKX.js";import"./IconInfo-DaD97Obl.js";import"./IconCheckmark-xzTeI3-0.js";import"./Empty-dMJQt44l.js";import"./Image-DQqLRj0F.js";import"./Input-DfPZdPf4.js";import"./IconCheckmarkCircleFilled-COMGr8o5.js";import"./IconChevronLeft-BXdHW9K3.js";import"./IconCaretDownFilled-jJ1OPfK7.js";import"./extends-CF3RwP-h.js";import"./Tab-D5EAJ0WS.js";import"./Badge-BNFyjTAU.js";import"./IconMore-DN9gMHsE.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
