import{j as e}from"./jsx-runtime-DXhgEWEq.js";import{r as i}from"./iframe-Dxu7kTaY.js";import{M as C,N as I}from"./NestedMenu-BKAHLovF.js";import{B as b}from"./Button-DO8ynCEe.js";import{I as y}from"./IconArrowDownloadFilled-C39dlQ0a.js";import{I as g,a as h,b as x}from"./IconBeach-QswE-qo8.js";import{I as M}from"./IconMore-CmN9xjwh.js";import{I as O}from"./IconCheckmark-DBqFmxaK.js";import{I as n}from"./IconSettings-BTLaAN8C.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CrPGe3YI.js";import"./index-D_o2rEy-.js";import"./Text-CD4tez-b.js";import"./helpers-B695UWyA.js";import"./index-AboGxAif.js";import"./types-BwufIdl1.js";import"./index-D0wQcglW.js";import"./useOnOutsideClick-Bl_-mJEg.js";import"./CollapseGroup-CxhQb4vr.js";import"./Divider-g589Qf_G.js";import"./AnimatePresenceWrapper-ClrENR0X.js";import"./IconChevronDown-D2XdhL21.js";import"./IconChevronUp-CGyoVK6M.js";import"./IconChevronRight-bTSpc8NI.js";import"./AvatarGroup-CEJkfw1L.js";import"./DropzoneFileUpload-BK6XQOQY.js";import"./Label-H7I5gyLb.js";import"./useFormProps-D4QdzcSZ.js";import"./ErrorMessage-BLxoPjM-.js";import"./IconDynamicComponent-DjBQjvKP.js";import"./Snackbar-1IUeCmMg.js";import"./Alert-BBvnmEeq.js";import"./IconDismissFilled-CwxEKNA4.js";import"./Progress-Ds5GT8vB.js";import"./IconAdd-DqHVWPcD.js";import"./Checkbox-Brg7aDFi.js";import"./Popover-CsTLJCEc.js";import"./IconDismiss-YWimNWUU.js";import"./Link-dVb7V81W.js";import"./IconInfo-DT52J0Mf.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
