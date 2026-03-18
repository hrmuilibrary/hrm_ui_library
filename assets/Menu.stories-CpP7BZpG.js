import{j as e}from"./jsx-runtime-BfBrHJXq.js";import{r as i}from"./iframe-BtDxg51D.js";import{M as C,N as I}from"./NestedMenu-BG9hyH0k.js";import{B as b}from"./Button-BHvyWmLO.js";import{I as y}from"./IconArrowDownloadFilled-DdV9VXii.js";import{I as g,a as h,b as x}from"./IconBeach-BEuoKjZF.js";import{I as M}from"./IconMore-CGJqTAti.js";import{I as O}from"./IconCheckmark-BB9RUinl.js";import{I as n}from"./IconSettings-BmU3V2Uz.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BTmjVFND.js";import"./index-6XlGGvnb.js";import"./Text-BPGIataE.js";import"./helpers-BoUXUw-g.js";import"./index-DYDl_GcV.js";import"./types-BTm4fvKQ.js";import"./Popover-DH1kacr5.js";import"./IconDismiss-COFd7T7I.js";import"./Link-DzSORBi2.js";import"./index-iEX0uw-z.js";import"./CollapseGroup-B0k4H-qY.js";import"./Divider-DgOzhyOu.js";import"./AnimatePresenceWrapper-DLYse9Ns.js";import"./IconChevronDown-wqGR3_ui.js";import"./IconChevronUp-BmrKlX8m.js";import"./IconChevronRight-pXjs0IZQ.js";import"./AvatarGroup-Bl2F7KaQ.js";import"./DropzoneFileUpload-BpzAMawD.js";import"./Label-DrychVm1.js";import"./useFormProps-Inl_JBP1.js";import"./ErrorMessage-BMN3JFBe.js";import"./IconDynamicComponent-CHOqZ7kP.js";import"./Snackbar-BYGFqMYa.js";import"./Alert-CnIxhDUS.js";import"./IconDismissFilled-DyfR8kWR.js";import"./Progress-B9TQKU-h.js";import"./IconAdd-ChlZPVhO.js";import"./Checkbox-3aXyi6YR.js";import"./IconInfo-CTwSDT5n.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
