import{j as o}from"./jsx-runtime-BfBrHJXq.js";import{r as b}from"./iframe-BtDxg51D.js";import{M,a as f}from"./Popover-DH1kacr5.js";import{a as x}from"./IconArrowDownloadFilled-DdV9VXii.js";import{S as T}from"./index-Bfzbzynk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-6XlGGvnb.js";import"./types-BTm4fvKQ.js";import"./helpers-BoUXUw-g.js";import"./IconDismiss-COFd7T7I.js";import"./Tooltip-BTmjVFND.js";import"./Text-BPGIataE.js";import"./Button-BHvyWmLO.js";import"./Link-DzSORBi2.js";import"./NestedMenu-BG9hyH0k.js";import"./index-iEX0uw-z.js";import"./CollapseGroup-B0k4H-qY.js";import"./Divider-DgOzhyOu.js";import"./AnimatePresenceWrapper-DLYse9Ns.js";import"./IconChevronDown-wqGR3_ui.js";import"./IconChevronUp-BmrKlX8m.js";import"./IconChevronRight-pXjs0IZQ.js";import"./AvatarGroup-Bl2F7KaQ.js";import"./DropzoneFileUpload-BpzAMawD.js";import"./Label-DrychVm1.js";import"./useFormProps-Inl_JBP1.js";import"./ErrorMessage-BMN3JFBe.js";import"./IconDynamicComponent-CHOqZ7kP.js";import"./Snackbar-BYGFqMYa.js";import"./Alert-CnIxhDUS.js";import"./IconDismissFilled-DyfR8kWR.js";import"./Progress-B9TQKU-h.js";import"./IconAdd-ChlZPVhO.js";import"./Checkbox-3aXyi6YR.js";import"./IconInfo-CTwSDT5n.js";import"./IconCheckmark-BB9RUinl.js";import"./Empty-D1yNK4b4.js";import"./Image-DuIpj-jc.js";import"./Input-BF2spYCV.js";import"./IconCheckmarkCircleFilled-CzSnr23g.js";import"./IconChevronLeft-zAqnZS6X.js";import"./IconCaretDownFilled-DmKSavrz.js";import"./extends-CF3RwP-h.js";import"./Tab-CneLuCSC.js";import"./Badge-fi3BP47p.js";import"./IconMore-CGJqTAti.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
