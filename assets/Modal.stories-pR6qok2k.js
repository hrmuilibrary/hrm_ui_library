import{j as o}from"./jsx-runtime-DvmNgJ5R.js";import{r as b}from"./iframe-Bew4b_tm.js";import{M,a as f}from"./Popover-DIuiO4eK.js";import{a as x}from"./IconArrowDownloadFilled-ChNQwXK4.js";import{S as T}from"./index-DdpT_XNa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-CUBCvdz8.js";import"./types-D3KjZq2C.js";import"./helpers-DNfQ28XG.js";import"./IconDismiss-BJlinSb9.js";import"./Tooltip-CZjDP-Mq.js";import"./Text-CTZTptmT.js";import"./Button-PqIUAvdh.js";import"./Link-C_cqlxm_.js";import"./NestedMenu-CvojxHlL.js";import"./index-CXr6yxjJ.js";import"./CollapseGroup-HNQddvNm.js";import"./Divider-Cvghg_df.js";import"./AnimatePresenceWrapper-CUkxO1kT.js";import"./IconChevronDown-AwXCfuIC.js";import"./IconChevronUp-DKPljk95.js";import"./IconChevronRight-Bf7kDtL2.js";import"./AvatarGroup-BLBBVcvZ.js";import"./DropzoneFileUpload-CM7WR0gx.js";import"./Label-n23EyiFh.js";import"./useFormProps-DjS1fQ-u.js";import"./ErrorMessage-Ch5wTRnj.js";import"./IconDynamicComponent-C3ehwPfw.js";import"./Snackbar-ZXu5_ONb.js";import"./Alert-CewcXgAC.js";import"./IconDismissFilled-DTgKZMqJ.js";import"./Progress-CQOyXcrW.js";import"./IconAdd-BP6bN7Wp.js";import"./Checkbox-CdXFf8CP.js";import"./IconInfo--LhAiYYD.js";import"./IconCheckmark-Dh8XXce9.js";import"./Empty-iMf1FgSj.js";import"./Image-D6CsNVWI.js";import"./Input-CK8kBG-2.js";import"./IconCheckmarkCircleFilled-CXkUPPzZ.js";import"./IconChevronLeft-BkEabXCs.js";import"./IconCaretDownFilled-CzNYLVY6.js";import"./extends-CF3RwP-h.js";import"./Tab-CMAcY-wl.js";import"./Badge-CJsiq05v.js";import"./IconMore-BAEhqSIr.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
